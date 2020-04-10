import styled from "styled-components"

const ListStyle = styled.div`
  color: #fff;
  margin-bottom: 48px;
  ul {
    list-style: none;
    margin: 0;
    width: 100%;
    padding: 0;
  }

  li {
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding: 12px 0;
    display: flex;
    justify-content: space-between;

    .pages {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - 30px);
    }
  }
`

export const ListHeaderStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
`

export default ListStyle
