import React, { useEffect } from 'react'
import { Pane, majorScale, Text } from 'evergreen-ui'
import Logo from '../components/logo'
import { signIn, useSession } from 'next-auth/client'
import SocialButton from '../components/socialButton'
import { useRouter } from 'next/router'

const Signin = () => {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(session)
    if (session) {
      router.push('/app')
    }
  }, [session, router])

  return (
    <Pane height="100vh" width="100%" display="flex">
      <Pane
        height="100%"
        width="50%"
        borderRight
        paddingX={majorScale(8)}
        paddingY={majorScale(5)}
        background="green500"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane>
          <Logo color="white" fontSize="36px" />
          <Pane marginTop={majorScale(2)}>
            <Text color="white" fontSize="24px">
              Sign in.
            </Text>
          </Pane>
        </Pane>
      </Pane>
      <Pane
        height="100%"
        width="50%"
        paddingX={majorScale(7)}
        background="greenTint"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pane width="100%" textAlign="center">
          <SocialButton type="Github" onClick={() => signIn('github')} />
        </Pane>
      </Pane>
    </Pane>
  )
}

export default Signin
