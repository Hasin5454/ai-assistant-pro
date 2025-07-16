import { Injectable } from '@nestjs/common';
import * as Figma from 'figma-api';
import { HeroUIService } from './hero-ui.service';

@Injectable()
export class DesignService {
  constructor(
    private readonly figma: Figma,
    private readonly heroUI: HeroUIService
  ) {}

  async generateFromFigma(url: string) {
    const figmaDesign = await this.figma.extractComponents(url);
    return this.heroUI.convertToCode(figmaDesign);
  }

  async generateFromHeroUI(componentName: string) {
    return this.heroUI.getComponent(componentName);
  }
}
