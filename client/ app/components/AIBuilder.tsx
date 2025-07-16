'use client';
import { useAIBuilder } from '@/hooks/useAIBuilder';

export function AIBuilder() {
  const {
    components,
    addComponent,
    generateCode,
    previewUrl
  } = useAIBuilder();

  return (
    <div className="aibuilder-grid">
      <ComponentPalette onSelect={addComponent} />
      
      <CanvasArea>
        {components.map((comp) => (
          <DraggableComponent key={comp.id} {...comp} />
        ))}
      </CanvasArea>
      
      <PreviewPanel url={previewUrl} />
      
      <button 
        onClick={generateCode}
        className="generate-btn"
      >
        Generate Code
      </button>
    </div>
  );
}
