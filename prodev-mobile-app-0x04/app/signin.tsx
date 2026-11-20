import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView
} from "react-native";
import { styles as joinStyles } from "../styles/_joinstyle";
import { GOOGLELOGO, FACEBOOKLOGO } from "../constants";
import { useRouter } from "expo-router";

export default function Signin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // placeholder — replace with authentication logic
    console.log("signin:", { email, password });
    router.push("/"); // go back home until there is a dashboard
  };

  return (
    <SafeAreaView style={joinStyles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={joinStyles.iconsection}>
          <Text />
          {/* optional: add logo or back button */}
          <Text />
        </View>

        <View style={joinStyles.titleTextGroup}>
          <Text style={joinStyles.titleText}>Welcome back</Text>
          <Text style={joinStyles.subText}>Sign in to continue to ProDev</Text>
        </View>

        <View style={joinStyles.formGroup}>
          <View>
            <Text style={joinStyles.formLabel}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              style={joinStyles.formControl}
            />
          </View>

          <View>
            <Text style={joinStyles.formLabel}>Password</Text>
            <View style={joinStyles.formPasswordControl}>
              <TextInput
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                placeholder="********"
                style={joinStyles.passwordControl}
              />
            </View>
            <Text style={joinStyles.forgotPasswordText}>Forgot password?</Text>
          </View>

          <TouchableOpacity style={joinStyles.primaryButton} onPress={handleSignIn}>
            <Text style={joinStyles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <View style={joinStyles.dividerGroup}>
            <View style={joinStyles.divider} />
            <Text style={joinStyles.dividerText}>OR</Text>
            <View style={joinStyles.divider} />
          </View>

          <View style={joinStyles.secondaryButtonGroup}>
            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: "#E9E9E9" }]}>
              <Image source={GOOGLELOGO} style={{ width: 22, height: 22, resizeMode: "contain" }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[joinStyles.secondaryButton, { borderColor: "#E9E9E9" }]}>
              <Image source={FACEBOOKLOGO} style={{ width: 22, height: 22, resizeMode: "contain" }} />
              <Text style={joinStyles.secondaryButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={joinStyles.signupgroup}>
          <Text style={joinStyles.signupTitleText}>Don&apos;t have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/join")}>
            <Text style={joinStyles.signupSubTitleText}>Join now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
