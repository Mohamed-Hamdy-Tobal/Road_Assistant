import Cover from '../../../components/layout/CoverLayout'

const SignInCover = () => {
    return (
        <Cover
            content={
                <>
                    <h3 className="mb-1">Welcome back!</h3>
                    <p>Please enter your credentials to sign in!</p>
                </>
            }
        >
            <h1>Loing</h1>
        </Cover>
    )
}

export default SignInCover
