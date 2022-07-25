import { render, screen } from '@testing-library/react';
import Link from './Link';

test('Text link shuold be in teh document', () => {
  render(<Link href="#">Link</Link>);
  expect(screen.getByText(/Link/i)).toBeInTheDocument();
});

test('shuold vahe classe with color when prop color given', () => {
  const colors = ['primary', 'secondary', 'success', 'danger'];
  for (let color of colors) {
    test(`it shuld be "${color}" in class string `, () => {
      const { container } = render(<Link color={color}>Link</Link>);
      expect(container.firstChild).toHaveClass(`link--${color}`);
    });
  }
});

test('shuold vahe classe with color when prop color given and prop claasprefix', () => {
  const colors = ['primary', 'secondary', 'success', 'danger'];
  const class_prefix = 'navigation';
  for (let color of colors) {
    test(`it shuld be "${color}" in class string and ${class_prefix} `, () => {
      const { container } = render(
        <Link color={color} class_prefix={class_prefix}>
          Link
        </Link>
      );
      expect(container.firstChild).toHaveClass(
        `${class_prefix}__link--${color}`
      );
    });
  }
});
