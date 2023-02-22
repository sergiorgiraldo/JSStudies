import NextAuth, { TokenSet } from "next-auth";
import ZitadelProvider from "next-auth/providers/zitadel";

const profile = async (profile, tokens) => {
	const userResponse = await fetch(
		`${process.env.ZITADEL_ISSUER}/oidc/v1/userinfo`,
		{
			headers: {
				Authorization: `Bearer ${tokens.access_token}`
			}
		}
	);
	const userData = await userResponse.json();
	return {
		id: userData.sub,
		name: userData.name,
		email: userData.email,
		loginName: userData.preferred_username,
		given_name: userData.given_name,
		family_name: userData.family_name,
		nickname: userData.nickname,
		email_verified: userData.email_verified,
		locale: userData.locale
	};
};

export default NextAuth({
	debug: true,
	providers: [
		ZitadelProvider({
			issuer: process.env.ZITADEL_ISSUER,
			clientId: process.env.ZITADEL_CLIENT_ID,
			clientSecret: process.env.ZITADEL_CLIENT_SECRET,
			profile
		})
	]
});
