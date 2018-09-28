import React from 'react'

const defaultChild = () => (
	<div className="default">
		+
	</div>
)

const ExpansionSlot = ({ children }) => (
  <section className="ExpansionSlot">
    {
		children
		? children
		: defaultChild()
	}
  </section>
)

export default ExpansionSlot
