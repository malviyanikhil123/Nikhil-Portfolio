import { toast, type ToastOptions } from "react-hot-toast";

const baseOptions: ToastOptions = {
  position: "top-center",
  duration: 3000,
};

const toastIds = {
  welcome: "site-welcome",
  sending: "email-sending",
  resumeDownload: "resume-download",
} as const;

export const showSiteToast = {
  welcome: () => {
    toast.success("Welcome to my portfolio!", {
      ...baseOptions,
      id: toastIds.welcome,
      icon: "👋",
      duration: 3200,
    });
  },
};

export const showEmailToast = {
  sending: () => {
    toast.loading("Sending message...", {
      ...baseOptions,
      id: toastIds.sending,
      duration: Infinity,
    });
  },

  success: (userName?: string) => {
    toast.success(`Thanks ${userName || "there"}! Message sent successfully.`, {
      ...baseOptions,
      id: toastIds.sending,
      duration: 3000,
    });
  },

  error: () => {
    toast.error("Failed to send message. Please try again.", {
      ...baseOptions,
      id: toastIds.sending,
      duration: 3500,
    });
  },

  configError: () => {
    toast.error("Email configuration missing. Please check .env values.", {
      ...baseOptions,
      id: toastIds.sending,
      duration: 4000,
    });
  },
};

export const showResumeToast = {
  downloadStarted: () => {
    toast.loading("Preparing resume download...", {
      ...baseOptions,
      id: toastIds.resumeDownload,
      duration: Infinity,
    });
  },

  downloadSuccess: () => {
    toast.success("Resume download completed successfully.", {
      ...baseOptions,
      id: toastIds.resumeDownload,
      icon: "📄",
      duration: 2800,
    });
  },

  downloadError: () => {
    toast.error("Couldn't download resume. Please try again.", {
      ...baseOptions,
      id: toastIds.resumeDownload,
      duration: 3500,
    });
  },
};

export const showToastExamples = {
  success: () => {
    toast.success("Settings saved!", baseOptions);
  },

  error: () => {
    toast.error("This didn't work.", baseOptions);
  },

  promise: async <T>(promise: Promise<T>) =>
    toast.promise(
      promise,
      {
        loading: "Saving...",
        success: "Settings saved!",
        error: "Could not save.",
      },
      baseOptions,
    ),

  multiLine: () => {
    toast(
      "This toast is super big. I don't think anyone could eat it in one bite.\n\nIt's larger than you expected. You eat it but it does not seem to get smaller.",
      {
        ...baseOptions,
        duration: 6000,
        style: { maxWidth: "420px", whiteSpace: "pre-line" },
      },
    );
  },

  darkMode: () => {
    toast("Hello Darkness!", {
      ...baseOptions,
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  },

  themed: () => {
    toast.success("Look at my styles.", {
      ...baseOptions,
      style: {
        border: "1px solid #FE5120",
        padding: "16px",
        color: "#FE5120",
      },
      iconTheme: {
        primary: "#FFC756",
        secondary: "#FFF5E6",
      },
    });
  },

  customPosition: () => {
    toast.success("Always at the bottom.", {
      ...baseOptions,
      position: "bottom-center",
    });
  },
};
