import styled from 'styled-components'

export const Text = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
`

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 372px;
  height: 49px;
  background: #d9d9d9;
  border-radius: 4px;
  margin-bottom: 41px;
  cursor: pointer;
`
export const FilterActiveWrapper = styled.form`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 368px;
  height: 260px;
  margin-bottom: 36px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

export const InputPriceStart = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 150px;
  height: 54px;
  margin-right: 21px;
  text-align: center;
  &::placeholder {
    font-size: 18px;
    line-height: 17px;
    color: #d9d9d9;
  }
`
export const InputPriceEnd = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 150px;
  height: 54px;
  text-align: center;
  &::placeholder {
    font-size: 18px;
    line-height: 17px;
    color: #d9d9d9;
  }
`
export const BottomFilter = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  font-family: 'Roboto';
  font-style: normal;
  font-size: 18px;
  line-height: 17px;
  color: #000000;
`

export const FilterWrapperBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 323px;
  height: 49px;
  background: #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
`
export const SelectFilter = styled.select`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
  font-family: 'Roboto';
  font-size: 20px;
  line-height: 17px;
  display: flex;
  padding-left: 18px;
  color: #000000;
  opacity: 0.75;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 323px;
  height: 54px;
  margin-top: 29px;
`
export const InputWrapper = styled.div``
