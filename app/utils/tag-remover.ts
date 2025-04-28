const tagRemover = (component: string) => component.replace(/<[^>]*>/g, "\t");

export default tagRemover;
