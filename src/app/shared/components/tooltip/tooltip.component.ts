import { Component, input } from '@angular/core';
import { TooltipDirective } from '@amin-karimi/ng2-tooltip-directive';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [TooltipDirective],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss'
})
export class TooltipComponent {
  titleTooltip = input.required<string>();
}
