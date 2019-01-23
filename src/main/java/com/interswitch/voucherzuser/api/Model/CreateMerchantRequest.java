package com.interswitch.voucherzuser.api.Model;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.NotBlank;

public class CreateMerchantRequest extends LoginRequest{
        @NotBlank(message = "Required")
        @Length(min = 3, max = 50)
        private String firstname;

        @NotBlank(message = "Required")
        @Length(min = 3, max = 50)
        private String lastname;

        @NotBlank(message = "Required")
        @Length(min = 10, max = 15)
        private String mobileNo;

        @NotBlank(message = "Required")
        private int companySize;

        private boolean isEnabled;

        public String getFirstname() {
            return firstname;
        }

        public void setFirstname(String firstname) {
            this.firstname = firstname;
        }

        public String getLastname() {
            return lastname;
        }

        public void setLastname(String lastname) {
            this.lastname = lastname;
        }

        public String getMobileNo() {
            return mobileNo;
        }

        public void setMobileNo(String mobileNo) {
            this.mobileNo = mobileNo;
        }

        public int getCompanySize() {
            return companySize;
        }

        public void setCompanySize(int companySize) {
            this.companySize = companySize;
        }

        public boolean isEnabled() {
            return isEnabled;
        }

        public void setEnabled(boolean enabled) {
            this.isEnabled = enabled;
        }

        @Override
        public String toString() {
            return "CreateMerchantResponse{" +
                    "firstname='" + firstname + '\'' +
                    ", lastname='" + lastname + '\'' +
                    ", mobileNo='" + mobileNo + '\'' +
                    ", companySize=" + companySize +
                    ", isEnabled=" + isEnabled +
                    '}';
        }
    }


