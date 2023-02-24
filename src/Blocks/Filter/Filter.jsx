import { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from './StyleFilter'

function Filter() {
  const [listingData, setListingData] = useState(null)

  useEffect(() => {
    axios

      .get('https://back-xpag.onrender.com/places/')

      .then((response) => setListingData(response.data))
  }, [])

  const [activeFilter, setActiveFilter] = useState(true)

  const toggleVisibility = (filter) => {
    setActiveFilter((currentFilter) =>
      currentFilter === filter ? false : filter
    )
  }

  return (
    <div>
      <S.FilterWrapper onClick={() => toggleVisibility(Filter)}>
        <S.Text>Подобрать недвижимость</S.Text>
      </S.FilterWrapper>

      {activeFilter === Filter && (
        <S.FilterActiveWrapper>
          <S.SelectFilter>
            <option value="">Страна и город</option>
            {listingData.map((list) => (
              <option value="">
                {list.country} → {list.city}
              </option>
            ))}
          </S.SelectFilter>
          <S.InputWrapper>
            <S.InputPriceStart placeholder="Цена от" />
            <S.InputPriceEnd placeholder="Цена до" />
          </S.InputWrapper>
          <S.FilterWrapperBottom>
            <S.BottomFilter>Подобрать</S.BottomFilter>
          </S.FilterWrapperBottom>
        </S.FilterActiveWrapper>
      )}
    </div>
  )
}

export default Filter
