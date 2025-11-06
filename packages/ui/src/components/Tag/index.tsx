import { styled } from '@styled-system/jsx'
import { tagRecipe, TagVariantProps } from './tag.recipe'
import { ark, Assign } from '@ark-ui/react'
import { CloseOutlineIcon } from '@nation-a/icons'
import { HTMLStyledProps } from '@styled-system/jsx'
import { css } from '@styled-system/css'

export type TagProps = Assign<HTMLStyledProps<'div'>, TagVariantProps> & {
  imageSrc?: string
  text: string
  onDeleteClick?: () => void
}

const Tag = ({ imageSrc, text, onDeleteClick, ref, ...rest }: TagProps) => {
  const StyledTag = styled(ark.div, tagRecipe)

  const handleClickDelete = (e: React.MouseEvent<SVGSVGElement>) => {
    e.stopPropagation()
    if (onDeleteClick) {
      onDeleteClick()
    }
  }

  return (
    <StyledTag avatar={!!imageSrc} ref={ref} {...rest}>
      {imageSrc ? (
        <styled.img
          src={imageSrc}
          className={css({ borderRadius: 'full', overflow: 'hidden', width: 8, height: 8 })}
          alt="avatar thumbnail"
        />
      ) : null}
      {text}
      {onDeleteClick ? (
        <CloseOutlineIcon size={12} onClick={handleClickDelete} className={css({ cursor: 'pointer' })} />
      ) : null}
    </StyledTag>
  )
}

Tag.displayName = 'Tag'

export default Tag
