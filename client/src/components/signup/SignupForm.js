import React from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Grommet,
  Text,
  TextInput,
} from 'grommet';
import { Google } from 'grommet-icons';
import theme from '../../theme';

function SignupForm() {
  const [value, setValue] = React.useState({ email: undefined, password: undefined });
  return (
    <Grommet theme={theme}>
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="12px"
        maxWidth="956px"
      >
        <Form
          value={value}
          onChange={(nextValue) => setValue(nextValue)}
          onSubmit={({ value: nextValue }) => console.log(nextValue)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '12px',
            align: 'align',
            height: '52px',
          }}
        >
          <Box
            style={{
              borderRadius: '24px 4px 4px 24px',
              border: '1px solid #bebeb8',
              height: '48px',
            }}
          >
            <FormField
              required
              name="email"
              style={{
                height: '48px',
                maxWidth: '216px',
                fontSize: '16px',
              }}
            >
              <TextInput
                name="email"
                type="email"
                placeholder="Your email address"
                style={{
                  padding: '13px 13px 13px 24px',
                  fontWeight: '400',
                }}
              />
            </FormField>
          </Box>
          <Box
            style={{
              borderRadius: '4px',
              border: '1px solid #bebeb8',
              height: '48px',
            }}
          >
            <FormField
              required
              name="password"
              style={{
                height: '48px',
                maxWidth: '216px',
                borderRadius: '4px',
                fontSize: '16px',
                fontWeight: '300',
              }}
            >
              <TextInput
                name="password"
                type="password"
                placeholder="Choose a password"
                style={{
                  padding: '13px',
                  fontWeight: '400',
                }}
              />
            </FormField>
          </Box>
          <Button
            primary
            type="submit"
            label="Get started"
            color={theme.global.colors.purple}
            style={{
              borderRadius: '4px 24px 24px 4px',
              border: 'none',
              height: '48px',
              fontSize: '16px',
              fontWeight: '500',
              color: 'white',
              padding: '0px 40px 0px 40px',
            }}
          />
        </Form>
        <Text>or</Text>
        <Button
          icon={<Google color="plain" />}
          label="Sign up with Google"
          gap="small"
          pad={{ vertical: '10px', horizontal: '10px' }}
          background="#ffffff"
          style={{
            border: '1px solid #bebeb8',
            height: '48px',
            borderRadius: '24px',
            fontSize: '16px',
            fontWeight: '500',
          }}
        />
      </Box>
    </Grommet>
  );
}

export default SignupForm;
