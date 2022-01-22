const FadeOut = ({ color }) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), ${color})`,
        bottom: 0,
        left: 0,
        position: 'absolute',
        right: 0,
        top: '80%',
      }}
    />
  )
}

export default FadeOut
