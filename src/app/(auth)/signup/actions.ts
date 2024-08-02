'use server'

export async function signupFetch(formData: FormData) {
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    nickname: formData.get('nickname') as string,
    gender: formData.get('gender') as string,
    birthDate: formData.get('birth-date') as string,
  }
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
      });
    console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
