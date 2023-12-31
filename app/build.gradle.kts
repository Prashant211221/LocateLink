plugins {
    id("com.android.application")
}

android {
    namespace = "com.locatelink"
    compileSdk = 33

    defaultConfig {
        applicationId = "com.locatelink"
        minSdk = 29
        targetSdk = 33
        versionCode = 1
        versionName = "1.0"

        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_1_8
        targetCompatibility = JavaVersion.VERSION_1_8
    }
}

dependencies {

    implementation("androidx.appcompat:appcompat:1.6.1")
    implementation("com.google.android.material:material:1.8.0")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.1.5")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.5.1")
      implementation(project(':react-native-onesignal')){
      exclude group: 'com.google.android.gms'
  }

  implementation(project(':react-native-maps')){
      exclude group: 'com.google.android.gms'
  }
  implementation 'com.google.android.gms:play-services-base:18.0.1'
  implementation 'com.google.android.gms:play-services-location:19.0.1'
  implementation 'com.google.android.gms:play-services-maps:18.0.2'
}