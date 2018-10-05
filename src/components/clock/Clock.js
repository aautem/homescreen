import React from 'react'

import Display from './Display'
import SecondLabel from './SecondLabel'
import SecondsGrid from './SecondsGrid'
import './Clock.css'

const Clock = () => (
  <div className="Clock">
    <div className="Clock_gutterTop">
      <SecondLabel>4</SecondLabel>
      <SecondLabel>12</SecondLabel>
      <SecondLabel>20</SecondLabel>
      <SecondLabel>28</SecondLabel>
      <SecondLabel>36</SecondLabel>
      <SecondLabel>44</SecondLabel>
      <SecondLabel>52</SecondLabel>
      <SecondLabel>60</SecondLabel>
    </div>

    <div className="Clock_display">
      <Display />
      <SecondsGrid />
    </div>

    <div className="Clock_gutterBottom">
      <SecondLabel>8</SecondLabel>
      <SecondLabel>16</SecondLabel>
      <SecondLabel>24</SecondLabel>
      <SecondLabel>32</SecondLabel>
      <SecondLabel>40</SecondLabel>
      <SecondLabel>48</SecondLabel>
      <SecondLabel>56</SecondLabel>
    </div>
  </div>
)

export default Clock
