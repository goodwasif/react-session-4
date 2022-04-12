import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .container {
    padding: 15px;
  }
  
  ul.images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 15px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  ul.images > li {
    position: relative;
    padding-top: 66%;
  }
  
  ul.images > li img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 567px) {
    ul.images {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
  }
  
`

export default GlobalStyle
