import React from 'react'
import styled from 'styled-components'

import CardImage from '../../Atoms/Task1/CardImage'
import CardLabel from '../../Atoms/Task1/CardLabel'
import CardTitle from '../../Atoms/Task1/CardTitle'
import ContentCheck from '../../Atoms/Task1/ContentCheck'
import Stars from '../../Atoms/Task1/Stars'
import Comment from '../../Atoms/Task1/Comment'
import { defaultCardDesign } from '../../../Mixins'

const CardVerticalStyle = styled.div`
  ${defaultCardDesign};
  width: 250px;
`

const ImageArea = styled.div``

const CardContentArea = styled.div`
  padding: 10px;
`

const CardCommentArea = styled.div`
  display: table;
  table-layout: fixed;
  box-sizing: border-box;
  width: 100%;
  height: 75px;
  padding: 10px;
  border-top: 1px solid #ccc;
`

const StarArea = styled.div`
  display: table-row;
  width: 100%;

  > div {
    display: table-cell;
    padding: 5px 0;
    vertical-align: middle;
  }
`

const CardVertical = ({ CardData }) => {
  return (
    <CardVerticalStyle>
      <ImageArea>
        <CardImage image={CardData.image} title={CardData.title} />
      </ImageArea>
      <CardContentArea>
        <CardLabel label={CardData.label} />
        <CardTitle title={CardData.title} />
        <ContentCheck check={CardData.check} />
      </CardContentArea>
      {CardData.stars || CardData.comment ? (
        <CardCommentArea>
          <StarArea>
            <Stars stars={CardData.stars} />
          </StarArea>
          {CardData.comment && <Comment comment={CardData.comment} />}
        </CardCommentArea>
      ) : (
        ''
      )}
    </CardVerticalStyle>
  )
}

export default CardVertical
