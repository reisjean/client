import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the head', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', { name: /XPTO text/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({
      'background-color': 'var(--backgroundColor)'
    })
  })
})
