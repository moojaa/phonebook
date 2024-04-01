import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  return (
    <div>
        <Row className='item-box'>
            <Col lg={3}>
            <img width={100} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAOVBMVEWjo6P///+dnZ27u7v8/PygoKDW1tampqb09PS0tLSurq6ZmZn5+fnh4eGxsbHx8fHo6OjFxcXPz8/gmqyCAAAFSUlEQVR4nO2cDXOjIBCGFVhRFAX//489wMRqkqYRUDY3+8xcZ9I0V97uBwssVhVBEARBEARBEARBEARBEATx3yGl+7e+WF5/KXclwByw/c5XAgBSjdw6+Kike1l6RJGAc6rOmmmobwyTsZ1ztK8T5IygeNPWT7QNVxV8la85KVYPz1KCgfSs2LdYxzuSnI14LSVgrIQvyWzAuH6jJKD5dxgH5KtYeY4diV2NrCRT+p2HrQitmEQ+64AybqAfaHGRo3DbRsL4gYutrjaiztGgWv83/8wyom4x2+am5VNQqwEwR7R4NQZttQZNLcQRy7gfbpCKYdYN7oAaEX7cstLjfgWM0xEXuzONGG0DzaF4We2D0dEYb4/Ey6pFtByfo7noP5bKbmJqhDkAeBsrpuWo1MjFMLF406Cqa0YTL8aMpUf/gP1lkfwJgy09+j0ywcucn6FyMpAJXub8DNWq89Ay5pkWVRUAPEVLXfPSArZImyYGVwZIin+XAUqPf8efG2Xv0aXHvyUtmfl0VlrBBhJDYi4gVYxGJSYpmwlUYmRanVnXMyIxFcxpYnBVAF2amK70+Dcc2/x/BtVxgEzMABrZqVNS0MylR78H+BC10xQ+NGDba1L62AnAqsV9SCtcXuaTc5RhvGlmZIapoIs6A/BMHapNwNB5FXcI4I8B8HVuedNE7TUHw2CDzXHZbMZ3ohE2AmMsg2sDcIXxiP3mAeFRUyCmdsaVln+QwPShngY/XzJEJeYeOFZv+hUmUsN4mDrQoyFqo5AGjEcuHVqfYhRg7m2Uy95G6L34zUThLV+TanQT/x5fpFXNMuDfxSxvNxWqkuwFfnDMtotpfo0V93YbemaQawlqVDPU7yxTD41i648jxoc0MG7e7HC0JjQCYw7+HQysnu522BmlnrQFxBn5BRJA8llPD64mJj1z/17p8R0GKtXZuTHtEGhNM9tOfd8ljfu1H4BKqrHjjm5U0r/Gt6w8AqyUHglBEARBIOJWCG9uMbMd+/fwF8734bmh927wSo38xqiU+3a/aNr+KFLWe9kw2kabx6LZl81GN3YEpwnWD2DFrVR86f+zMntezyzrM78UqPCWaxBuZq9CNmeCYv/lrskJCve2USkKNb1bcI1WH+4GaLUdpf8zYPE4p4TJzjYhQg7eOQuLT9tJNJeDgSnbhLOZ48fN4RPCNFbh8LZeWjNEKdnoGYyVfUE5i4+Dmk3CnYYfBjPfLm1eHzzLLAHV/DyXxCKmeXmGQ4lUIKve+r2xWP96kOL/l8n2hRJbHw7L80i5yfEH6f31SqrQyLSZCdO13L5c3+IEVXx7yV9M3bUbhS6HDbks8oioh/nCy+gAnf7s1n+cmFro7rI5lHEjzhUjzDW9Dq4Ss6eFyw+ThSsyNJsPPY4hDlG35zcIuYlyzjVNvhXjc3R/tm36+cMnfiSKCe2OJ8+fzF6i5abm3Kc4LFqu4lw1jOerkT9SM52YoUNjzGVy/C8y6iQpIJs3fRfnyBGnPWwrrqM0Uc85RXRCG3YKJ3UKN9f62II45aow8AJSgpwT7nDIQ82kGbXkvyooIfFWWQpd3l4bmXxJPoUm834NqEIR4xGZV9F94kXMNPKWz7JPurqYSttndTNVUktdZ63QWOIDP1LJuRSQLPEZGaloltHPWNGQcUGT0TJMXbCH8Tvud2cMGsbLlDKrmjrjirN0/GfdDCg7ZXoyTpusYGG20GR0MxJDYkgMiSExJIbEkBgSQ2JIzF8oXpice03s4YLC1VR5z2lBFiT3AU3RfnAczegEQRAEQRAEQRAEQRAEQRTnH279SUWgfg8DAAAAAElFTkSuQmCC'/>
            </Col>
            <Col lg={9}>
            <div>
                {item.name}
            </div>
            <div>
                {item.phoneNumber}
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ContactItem