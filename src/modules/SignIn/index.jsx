import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Api } from "../../service/api";
import styles from "./SignIn.module.css";

export const SignIn = () => {
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const getOtp = async () => {
		try {
			setIsLoading(true);
			const res = await Api.post("/auth/login", {
				phoneNumber: phoneNumber,
			});
			console.log(res);
			sessionStorage.setItem("requestId", res.data.requestId);
			sessionStorage.setItem("phoneNumber", phoneNumber);
			navigate("/verify-otp");
		} catch (e) {
			console.log(e);
			window.alert("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className={styles.fullScreenWrapper}>
			<div className={styles.signInContainer}>
				<h1>Sign In</h1>
				<p>
					Please enter your mobile number to login. We will send an OTP to
					verify your number.
				</p>
				<PhoneInput
					defaultCountry="in"
					inputStyle={{ width: "100%" }}
					placeholder="Phone Number"
					value={phoneNumber}
					onChange={(phone, meta) => setPhoneNumber(phone)}
				/>
				<Button size="full" loading={isLoading} onClick={getOtp}>
					Sign In
				</Button>
			</div>
		</div>
	);
};
