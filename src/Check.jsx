import React from 'react'

export const Check = () => {
  return (
    <td><input id="check${item.id}" type="checkbox" onclick="tacharItem(${item.id})"/></td>

  )
}
