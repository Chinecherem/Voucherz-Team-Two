package com.interswitch.voucherzuser.api.Model;

import org.hibernate.validator.constraints.Length;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class EmailRequest {
    @Email(message = "Invalid Email Address")
    @NotBlank(message = "Required")
    private final String to;

    @Email
    @NotBlank(message = "Required")
    private final String from;

    @NotBlank(message = "Required")
    private final String subject;

    @NotBlank(message = "Required")
    @Length(min = 50, max = 500)
    private final String content;

    public EmailRequest(String to, String from, String subject, String content) {
        this.to = to;
        this.from = from;
        this.subject = subject;
        this.content = content;
    }

    public String getTo() {
        return to;
    }

    public String getFrom() {
        return from;
    }

    public String getSubject() {
        return subject;
    }

    public String getContent() {
        return content;
    }
}
