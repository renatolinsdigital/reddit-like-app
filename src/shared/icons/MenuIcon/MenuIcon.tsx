import { theme } from 'src/theme/theme';
import { IconProps } from 'src/shared/models';
import { SvgContainer } from 'src/shared/components';

function MenuIcon({
  id,
  title,
  width = 50,
  height = 50,

  marginTop = 0,
  marginLeft = 0,
  marginRight = 0,
  marginBottom = 0,

  paddingTop = 0,
  paddingLeft = 0,
  paddingRight = 0,
  paddingBottom = 0,

  rotationDegrees,
  colorName = 'dark',
}: IconProps) {
  const { colors } = theme;

  const styles = {
    width,
    height,
    fill: colors[colorName],
    stroke: colors[colorName],
    strokeWidth: 5.6195,
    strokeMiterlimit: 10,
  };
  return (
    <SvgContainer
      id={id}
      width={width}
      height={height}
      viewBox="0 0 32 28.5"
      marginTop={marginTop}
      marginLeft={marginLeft}
      paddingTop={paddingTop}
      paddingLeft={paddingLeft}
      marginRight={marginRight}
      paddingRight={paddingRight}
      marginBottom={marginBottom}
      paddingBottom={paddingBottom}
      rotationDegrees={rotationDegrees}
    >
      <>
        <title>{title || 'Menu Icon'}</title>
        <g style={styles}>
          <line x1="0" y1="2.8" x2="32" y2="2.8" />
          <line x1="0" y1="14.3" x2="32" y2="14.3" />
          <line x1="0" y1="25.7" x2="32" y2="25.7" />
        </g>
      </>
    </SvgContainer>
  );
}

export default MenuIcon;
