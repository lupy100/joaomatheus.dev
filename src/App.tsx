import React from 'react'
import { css, jsx, Global } from '@emotion/react'
import mq from './config/breakpoints'
import 'css-maid'
import styled from '@emotion/styled'

interface StyledComponentProps {
  size: string
}

const SomeComp = styled.div<StyledComponentProps>((props) => ({
  color: 'hotpink',
  fontSize: props.size,
}))

const AnotherComp = styled.div`
  color: ${(props) => props.color};
`

const App: React.FC = () => {
  return (
    <div>
      <SomeComp size='24px'>
        Teste
        <AnotherComp color='green'>Vercel</AnotherComp>
      </SomeComp>
      <h1>Joãozin</h1>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap');

          a {
            color: lime;
          }

          body {
            text-align: left;
            color: #fff;
            background: #081229;
            display: grid;
            place-items: center;
            height: 100vh;
          }

          h1 {
            font-size: 2rem;
          }

          ${mq[2]} {
            a {
              color: firebrick;
            }
          }

          ${mq[1]} {
            a {
              color: mediumblue;
            }
          }

          ${mq[0]} {
            a {
              color: blanchedalmond;
            }
          }
        `}
      />
    </div>
  )
}

export default App
