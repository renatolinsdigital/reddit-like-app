import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { ReactInputEvent } from 'src/shared/models';
import { AppDispatch, filterByText } from 'src/store';
import { SearchIcon, MenuIcon } from 'src/shared/icons';
import { BoxStyled, TextInput, Button } from 'src/shared/components';
import { Image, UserInfo, AddPostButton } from 'src/domain/components';

function AppHeader() {
  const [inputText, setInputText] = useState('');
  const [inputQuery, setInputQuery] = useState('');

  const postsDispatch = useDispatch<AppDispatch>();

  const onSearchByText = () => {
    setInputQuery(inputText);
  };

  const onInputChange = (event: ReactInputEvent) => {
    setInputText(event.target.value);
  };

  useEffect(() => {
    if (inputQuery) {
      postsDispatch(filterByText(inputQuery));
    } else {
      postsDispatch(filterByText('all'));
    }
  }, [inputQuery, postsDispatch])

  return (
    <BoxStyled
      borderColorName='gray2'
      borderBottom="1px solid"
    >
      <BoxStyled
        maxWidth={1600}
        paddingTop={20}
        paddingLeft={15}
        paddingRight={15}
        paddingBottom={25}
        justifyContent="flex-start"
      >
        <BoxStyled
          cursor='pointer'
          paddingRight={20}
          isStretched={false}
          borderRight="1px solid"
          borderColorName='gray2'
        >
          <Image
            width='50'
            alternativeText='Company logo'
            sharedImageFileName="company_logo.svg"
          />
        </BoxStyled>
        <BoxStyled
          paddingLeft={20}
          isStretched={false}
          justifyContent='flex-start'
        >
          <Button
            minWidth={52}
            marginRight={15}
            paddingLeft={15}
            paddingRight={15}
            borderWidth='1px'
            borderStyle='solid'
            borderColorName='gray2'
            backgroundColorName='white'
            hoverBackgroundColorName='gray2'
          >
            <MenuIcon width={20} height={19} />
          </Button>
          <TextInput
            maxWidth={380}
            borderRadius={4}
            lineHeightName='tall'
            onChange={onInputChange}
            backgroundColorName='gray2'
            onENTERKeyPress={onSearchByText}
            borderColorName='primaryDefault'
            leftIcon={<SearchIcon colorName='gray3' />}
          ></TextInput>
        </BoxStyled>

        <BoxStyled justifyContent='flex-end' paddingRight={20}>
          <AddPostButton />
        </BoxStyled>

        <UserInfo />

      </BoxStyled>
    </BoxStyled >
  );
}

export default AppHeader;