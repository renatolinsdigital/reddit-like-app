import { theme } from 'src/theme/theme';
import { IconProps } from "src/shared/models";
import { SvgContainer } from "src/shared/components";

function ChevronIcon({
  id,
  title,
  width = 20,
  height = 20,
  rotationDegrees,
  colorName = 'dark',

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,
}: IconProps) {
  const { colors } = theme;

  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      marginTop={marginTop}
      paddingTop={paddingTop}
      marginLeft={marginLeft}
      marginRight={marginRight}
      paddingLeft={paddingLeft}
      marginBottom={marginBottom}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      viewBox="-320 -256 1792 1792"
      rotationDegrees={rotationDegrees}
    >
      <>
        <title>{title || 'Chevron icon'}</title>
        <path fill={colors[colorName]} d={`m 1099,704 q 0,-52 -37,-91 L 410,-38 q -37,-37 -90,-37 -53,0 -90,37 l \
        -76,75 q -37,39 -37,91 0,53 37,90 l 486,486 -486,485 q -37,39 -37,91 0,53 37,90 l \
        76,75 q 36,38 90,38 54,0 90,-38 l 652,-651 q 37,-37 37,-90 z`}
        />

      </>
    </SvgContainer>
  );
}

export default ChevronIcon;
