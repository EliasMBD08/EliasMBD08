# Portafolio Elias — Deploy

## Arquitectura

```
git push / pull request → main
   → GitHub Actions (quality gate)
       lint · typecheck · build (budgets) · audit · trivy
       docker build (validación, sin publicar)
   → (todo en verde) POST Deploy Webhook (Bearer)
   → Coolify: git clone → docker compose build → imagen LOCAL
              → health check → up -d
   → coolify-proxy (HTTPS con DNS-01)
   → https://elias.bitnovastudios.com
```

> **No hay registry.** La imagen se construye y se administra directamente en el
> VPS. No hay GHCR, ni tags, ni `pull_policy`, ni credenciales que rotar.
>
> El deploy lo dispara **el webhook del CI, no el push de GitHub**. Por eso en
> Coolify el _Auto deploy_ debe estar en **Manual deployments only**: si no,
> un push despliega sin pasar por las validaciones.

## Configurar en Coolify (una sola vez)

1. Coolify → _Settings → Advanced_ → **API Access = Enabled**
2. Coolify → _Keys & Tokens → API Tokens_ → descripción + permiso **`deploy`**
   → copiar el token
3. Coolify → _Projects_ → _+ New Resource_ → **Docker Compose**
   - Source = repo Git (`EliasMBD08/EliasMBD08`), branch `main`,
     base directory `/`, compose path `docker-compose.yml`
4. _General → Container labels_ → _Managed by Coolify_ → **Reset to defaults**
5. _Domains_ → añadir `elias.bitnovastudios.com` → **Port = 4000**
   (host pelado: sin espacios, sin esquema, sin barra final)
6. _Environment Variables_ → **ninguna** (la app no usa variables de entorno)
7. _Advanced → Deployment → Auto deploy_ → **Manual deployments only**
8. _Webhooks → Deploy Webhook_ → copiar la URL (`?uuid=<id>`)
9. Click **Deploy** (primer despliegue manual: el recurso anterior usaba la
   imagen de GHCR y hay que reconstruir el stack con el nuevo compose)

> El _Port_ del dominio **debe** ser `4000`: es el mismo número que el
> `expose` del compose. Si no coinciden, el dominio devuelve `404`.

## Conectar GitHub Actions con Coolify (una sola vez)

GitHub → _Settings → Secrets and variables → Actions_ → **dos** secrets:

| Secret                   | Valor                   |
| ------------------------ | ----------------------- |
| `COOLIFY_DEPLOY_WEBHOOK` | la URL del paso 8       |
| `COOLIFY_TOKEN`          | el API token del paso 2 |

## Despliegues siguientes

Solo `git push main`. El CI valida y, si todo pasa, notifica a Coolify.

> **Protege `main`**: en GitHub → _Settings → Branches → Rules_, exige el
> check de CI para mergear. Como el auto-deploy de Coolify está apagado, el
> CI es la única puerta.

## Rollback

Opción 1 (sin tocar código):

1. Coolify → portafolio-elias → fijar el **commit** anterior
2. Click _Redeploy_

> La imagen queda **local** en el VPS, así que el rollback es por commit SHA
> (no hay tags que navegar). Devuelve exactamente el código que se validó.

Opción 2 (rollback de código):

1. `git revert <commit-hash>`
2. `git push origin main`

## Healthcheck

El contenedor expone `/healthz` (ruta Express en `src/server.ts`). El
healthcheck del compose lo consulta; si falla 3 veces, Docker reinicia el
contenedor y Traefik lo saca del routing (el dominio responde `404` /
`No available server`).

> El healthcheck necesita `wget` **dentro** de la imagen final
> (`node:24-alpine` lo trae).

## Verificación en el VPS

```bash
docker images | grep portafolio                          # imagen LOCAL, sin registry
docker logs --tail 30 coolify-proxy | grep -iE 'ERR'     # debe salir limpio
docker ps --filter name=portafolio --format '{{.Names}}  {{.Status}}'
curl -sI https://elias.bitnovastudios.com | head -5
curl -s  https://elias.bitnovastudios.com/healthz
```

> Que la raíz devuelva **HTML renderizado** (no un `<app-root></app-root>`
> vacío) confirma que el SSR funciona. Y que el log del contenedor **no**
> tenga `ERROR: Bad Request` confirma que `security.allowedHosts` de
> `angular.json` incluye el dominio.

## Logs

Coolify → portafolio-elias → _Logs_. Logs del contenedor en JSON, rotación
10 MB × 5.

## Activar el job de unit tests

El job está comentado en `.github/workflows/ci.yml` porque el proyecto todavía
no tiene archivos `*.spec.ts` y `ng test` sale con código 1 (`No tests
found`), lo que dejaría el gate en rojo siempre.

Para activarlo:

1. Crear al menos un `*.spec.ts` (por ejemplo `src/app/app.spec.ts`)
2. Descomentar el bloque `Unit tests` / `Upload coverage` del workflow
3. Verificar en local: `npx ng test --watch=false`

## Comandos útiles

```bash
npm run format          # prettier --write .
npm run format:check    # prettier --check .  (mismo paso que el CI)
npx tsc -p tsconfig.app.json --noEmit
npm run build           # build de produccion + budgets
npm run serve:ssr:elias # levanta el servidor SSR ya compilado
```
