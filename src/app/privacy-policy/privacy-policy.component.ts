import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaService } from '../core/services/meta.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent implements OnInit {
  private metaService = inject(MetaService);

  ngOnInit(): void {
    this.metaService.setPrivacyPageMeta();
  }
}
