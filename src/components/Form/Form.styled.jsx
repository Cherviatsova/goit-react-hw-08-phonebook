import styled from '@emotion/styled'

export const Container = styled.div`
    margin-bottom: 15px;
`

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
     align-items: flex-start;
  flex-wrap: wrap;
    width: 400px;
    height: 200px;
    padding: 10px;
    border: 1px solid black;
`

export const Label = styled.label`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 5px;
     display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

export const Input = styled.input`
  width: 200px;
  height: 20px;
margin-bottom: 15px;
outline: none;
border-radius: 4px;
border: 2px solid #7e8a8b;
&:focus{
    border: 4px solid #56b8d6
}
`

export const ErrorText = styled.p`
  margin-bottom: 16px;
  color: red;
  font-size: 14px;
`;

export const SubmitBtn = styled.button`
  background-color: #2878ad;
  border: unset;
  border-radius: 4px;
  outline-color: rgb(84 105 212 / 0.5);
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 1px 0px, rgb(40, 120, 173) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(60, 66, 87, 0.08) 0px 2px 5px 0px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  min-height: 44px;
  cursor: pointer;
  &[disabled] {
    pointer-events: none;
    background-color: #cccccc;
    opacity: 0.5;
  }
`;