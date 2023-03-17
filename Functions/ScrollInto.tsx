export function scrollInto(id: string) {
  const element: HTMLElement | null = document.getElementById(id);
  element != null ? element.scrollIntoView() : null;
}
