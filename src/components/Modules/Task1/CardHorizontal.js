import React from 'react'
import styled from 'styled-components'

import CardImage from '../../Atoms/Task1/CardImage'
import CardTitle from '../../Atoms/Task1/CardTitle'
import Stars from '../../Atoms/Task1/Stars'
import Comment from '../../Atoms/Task1/Comment'
import Author from '../../Atoms/Task1/Author'
import { defaultCardDesign } from '../../../Mixins'

const CardHorizontalStyle = styled.div`
  ${defaultCardDesign};
  display: table;
  table-layout: fixed;
  width: 450px;
  min-height: 180px;
`

const ImageArea = styled.div`
  display: table-cell;
  width: 40%;
`

const CardContentArea = styled.div`
  display: table-cell;
  box-sizing: border-box;
  width: 60%;
  padding: 15px;
  vertical-align: top;
`

const StarArea = styled.div`
  > div {
    display: inline-block;
  }
`

const CardHorizontal = ({ CardData }) => {
  return (
    <CardHorizontalStyle aria-label={CardData.title}>
      <ImageArea>
        <CardImage image={CardData.image} title={CardData.title} />
      </ImageArea>
      <CardContentArea>
        <CardTitle title={CardData.title} styles="horizontal" />
        <Comment comment={CardData.comment} styles="horizontal" />
        <StarArea>
          <Stars stars={CardData.stars} />
          <Author author={CardData.author} />
        </StarArea>
      </CardContentArea>
    </CardHorizontalStyle>
  )
}

export default CardHorizontal
