import styled from 'styled-components';

const Nav = () => {
  return (
    <div>
      <Logo>Hacker News</Logo>
      <nav>
        <ul>
          <li>about</li>
          <li>mood</li>
        </ul>
      </nav>
    </div>
  )
}

const Logo = styled.p`
  font-size: 20px;
  color: red;
`

export default Nav;