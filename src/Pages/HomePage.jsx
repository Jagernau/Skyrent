import { useState, useEffect } from 'react'
import axios from 'axios'
import * as S from '../Blocks/Filter/StyleFilter'
import Header from '../Blocks/Header/Header'
import TopContent from '../Blocks/TopContent/TopContent'
// import Filter from '../Blocks/Filter/Filter'
import Items from '../Blocks/Items/Items'
import Footer from '../Blocks/Footer/Footer'

// const filters = (searchText, listingData) => {
//   if (!searchText) {
//     return listingData
//   }
//   return listingData.filter(({ price }) => price.includes(searchText))
// }

function HomePage() {
  const [listingData, setListingData] = useState(null)

  // const [searchTern, setSearchTern] = useState('')

  // let priceFrom = ''

  // useEffect(() => {
  //   const filtered = filters(searchTern, listingData)
  //   setListingData(filtered)
  // }, [searchTern])

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

  // const setPriceFrom = (value) => {
  //   priceFrom = value
  // }

  const fetchFilteredLocations = () => {
    const minPrice = document.querySelector('#minPrice').value
    const maxPrice = document.querySelector('#maxPrice').value

    // ?frome=200&to=400
    const selectLocation = document.querySelector('#selectLocations').value

    // const selectLocation = document.getElementById('selectLocations')
    // const { location } = selectLocation.options[selectLocation.selectedIndex]

    const BASE_URL = 'https://back-xpag.onrender.com/places/?'
    let url = BASE_URL
    if (minPrice !== '') {
      url += `from=${minPrice}&`
    }
    if (maxPrice !== '') {
      url += `to=${maxPrice}&`
    }
    if (selectLocation !== undefined) {
      url += `city=${selectLocation}`
    }
    axios

      .get(url)

      .then((response) => setListingData(response.data))
  }

  // const [minPrice, setMinPrice] = useState('')
  // const [maxPrice, setMaxPrice] = useState('')

  // const handleMinPriceChange = ({ target: { value } }) => {
  //   if (/^\d*$/.test(value)) {
  //     setMinPrice(value ? Number(value).toString() : '')
  //   }
  // }

  // const handleMaxPriceChange = ({ target: { value } }) => {
  //   if (/^\d*$/.test(value)) {
  //     setMaxPrice(value ? Number(value).toString() : '')
  //   }
  // }

  // const filterClick = () => {
  //   setSearchTern()
  // }

  return (
    <div className="centr">
      <Header />
      <TopContent />
      {/* <Filter /> */}
      <div>
        <S.FilterWrapper onClick={() => toggleVisibility(HomePage)}>
          <S.Text>Подобрать недвижимость</S.Text>
        </S.FilterWrapper>

        {activeFilter === HomePage && (
          <S.FilterActiveWrapper>
            <S.SelectFilter id="selectLocations">
              <option value="">Страна и город</option>
              {listingData.map((list) => (
                <option value={list.city}>
                  {list.country} → {list.city}
                </option>
              ))}
            </S.SelectFilter>
            <S.InputWrapper>
              <S.InputPriceStart
                placeholder="Цена от"
                // onChange={(e) => setPriceFrom(e.target.value)}
                // onChange={handleMinPriceChange}
                // value={minPrice}
                id="minPrice"
              />
              <S.InputPriceEnd
                placeholder="Цена до"
                // onChange={handleMaxPriceChange}
                // value={maxPrice}
                id="maxPrice"
              />
            </S.InputWrapper>
            <S.FilterWrapperBottom onClick={() => fetchFilteredLocations()}>
              <S.BottomFilter>Подобрать</S.BottomFilter>
            </S.FilterWrapperBottom>
          </S.FilterActiveWrapper>
        )}
      </div>
      <Items data={listingData} />
      <Footer />
    </div>
  )
}

export default HomePage
