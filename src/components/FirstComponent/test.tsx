import { render, screen } from '@testing-library/react'

import FirstComponent from '.'

describe('<FirstComponent />', () => {
  it('should render the head', () => {
    const { container } = render(<FirstComponent />)

    expect(
      screen.getByRole('heading', { name: /XPTO text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<FirstComponent />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'var(--backgroundColor)'
    })
  })
})
