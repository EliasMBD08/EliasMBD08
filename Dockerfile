# Stage 1: Build
FROM node:24-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código
COPY . .

# Build de la aplicación para producción
RUN npm run build

# Stage 2: Servir con nginx
FROM nginx:alpine

# Copiar archivos build desde el stage anterior
COPY --from=builder /app/dist/portafolio/browser /usr/share/nginx/html

# Copiar configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
