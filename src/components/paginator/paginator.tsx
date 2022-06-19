import classNames from "classnames"
import Chevron from "../../assets/icons/chevron"
import './paginator.scss'

type Props = {
  pages: number,
  current?: number,
  onChange?: (page: number) => void
}

const Paginator = ({ pages, current, onChange }: Props) => {

  const handlePrevious = () => {
    if (current !== undefined) onChange?.(current - 1)
  }

  const handleNext = () => {
    if (current !== undefined) onChange?.(current + 1)
  }

  const leftChevronButtonDisabled = current !== undefined && current <= 0
  const rightChevronButtonDisabled = current !== undefined && current >= pages - 1

  return (
    <div className="paginator">
      <button
        className={classNames('paginator__chevron-button', leftChevronButtonDisabled && 'paginator__chevron-button--disabled')}
        onClick={handlePrevious}
        disabled={leftChevronButtonDisabled}
      >
        <Chevron color="inherit" className="paginator__chevron-button__icon" />
      </button>
      {new Array(pages).fill('').map((_, index) => (
        <button key={index} className={classNames('paginator__page-button', current === index && 'paginator__page-button--selected')} onClick={() => onChange?.(index)} />
      ))}
      <button
        className={classNames('paginator__chevron-button paginator__chevron-button--right', rightChevronButtonDisabled && 'paginator__chevron-button--disabled')}
        onClick={handleNext}
        disabled={rightChevronButtonDisabled}
      >
        <Chevron color="inherit" className="paginator__chevron-button__icon" />
      </button>
    </div>
  )
}

export default Paginator
