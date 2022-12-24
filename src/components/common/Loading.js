import React from 'react'

export default function Loading({fetchingRef, isFetching}) {
  return (
    <div
    style={{ height: '50px', margin: '25px' }}
    ref={fetchingRef}
>
    <span style={{ display: isFetching ? "block" : "none" }}>Loading...</span>
</div>
  )
}
