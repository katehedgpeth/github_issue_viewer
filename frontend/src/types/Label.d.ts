interface LabelObj {
  color: string | null;
  description: string | null;
  name: string;
  url: string;
}

type Label = string | LabelObj;

export default Label;