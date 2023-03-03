import { Link } from 'react-router-dom'
import * as S from '../Json/StyleJsonItems'

function Items(props) {
  const listingData = props.data

  if (!listingData) {
    return <p>Loading...</p>
  }
  return (
    <div>
      {listingData.map((list) => (
        <S.ItemWrapper>
          <Link key={list.pk} to={`/item/${list.pk}`}>
            <S.ImgItem src={list.picture_url} alt={list.country} />

            <S.LocationWrapper>
              <S.Location>
                {list.country} → {list.city}
              </S.Location>
            </S.LocationWrapper>

            <S.TextItem>{list.description}</S.TextItem>

            <S.Rent>$ {list.price} / month</S.Rent>
          </Link>
        </S.ItemWrapper>
      ))}
    </div>
  )
}

export default Items
