import { useState } from "react";
import OtpInput from "react-otp-input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Api } from "../../service/api";
import styles from "./VerifyOtp.module.css";

export const VerifyOtp = () => {
	const [otp, setOtp] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const verifyOtp = async () => {
		try {
			setIsLoading(true);
			const requestId = sessionStorage.getItem("requestId");
			const phoneNumber = sessionStorage.getItem("phoneNumber");
			const res = await Api.post("/auth/verify_otp", {
				phoneNumber: phoneNumber,
				requestId: requestId,
				otp: otp,
			});
			sessionStorage.setItem("token", res.data.token);
			sessionStorage.removeItem("requestId");
			sessionStorage.removeItem("phoneNumber");
			navigate("/dashboard");
		} catch (err) {
			console.log(err);
			window.alert("Something went wrong");
		} finally {
			setIsLoading(false);
		}
	};

	const inputStyles = {
		width: "5rem",
		height: "5rem",
		fontSize: "2rem",
		borderRadius: 8,
		border: "1px solid rgba(0,0,0,0.3)",
	};

	const containerStyle = {
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		margin: "1rem 0",
	};

	return (
		<div className={styles.fullScreenWrapper}>
			<div className={styles.otpContainer}>
				<h1>OTP Verification</h1>
				<p>
					We have sent and OTP to +919889898989. Please enter the code received
					to verify.
				</p>
				<OtpInput
					value={otp}
					onChange={setOtp}
					numInputs={4}
					containerStyle={containerStyle}
					inputStyle={inputStyles}
					renderInput={(props) => <input {...props} />}
				/>
				<Button size="full" onClick={verifyOtp} loading={isLoading}>
					Verify
				</Button>
				<div className={styles.actions}>
					<span className={styles.action}>Resend OTP</span>
					<Link to="/sign-in" className={styles.action}>
						Use another account
					</Link>
				</div>
			</div>
		</div>
	);
};
