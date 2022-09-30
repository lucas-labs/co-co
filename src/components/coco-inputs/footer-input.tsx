import { Box, useFocus } from 'ink';
import React, { FC, useEffect } from 'react';
import { FocusKey } from '../../common/types/focus-keys.types';
import { i18n } from '../../common/i18n/i18n';
import TextInput from '../input/input';
import { InputProps } from './types.common';

export const FooterInput: FC<InputProps> = ({
    display = false,
    onSelected,
    focusChanged,
    onValidChange
}) => {
    const { isFocused } = useFocus({
        autoFocus: false,
        id: FocusKey.footerSelector,
    });

    useEffect(() => {
        focusChanged && focusChanged(isFocused);
    }, [isFocused]);

    const validChanged = (value: boolean) => {
        onValidChange && onValidChange(FocusKey.footerSelector, value);
    }

    return (
        <Box width="100%" flexDirection='row' alignItems="flex-start" justifyContent="flex-start">
            <TextInput 
                title={i18n('footer')}
                label={`(${i18n('optional')}) ${i18n('alt/shift/ctrl + enter to insert a new line')}`}
                titleBg='#db279f'
                focused={isFocused}
                display={display}
                onSubmit={onSelected}
                onValidChange={validChanged}
                validator={/.*/s} 
            />
        </Box>
    );
};
