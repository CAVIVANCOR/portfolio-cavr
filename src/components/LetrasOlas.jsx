import './LetrasOlas.css'
export default function LetrasOlas({titulo}) {
  return (
    <div className='containerLetras'>
        <h2 className='border'>{titulo}</h2>
        <h2 className='wave'>{titulo}</h2>
    </div>
  )
}
