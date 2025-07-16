interface AIResponse {
  content: string;
  model: string;
  tokens: number;
  formats?: ('text' | 'code' | 'image')[];
}

interface Component {
  id: string;
  type: string;
  props: Record<string, any>;
  children?: Component[];
}
