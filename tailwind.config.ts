// import type { Config } from "tailwindcss";

// export default {
// 	darkMode: ["class"],
// 	content: [
// 		"./pages/**/*.{ts,tsx}",
// 		"./components/**/*.{ts,tsx}",
// 		"./app/**/*.{ts,tsx}",
// 		"./src/**/*.{ts,tsx}",
// 	],
// 	prefix: "",
// 	theme: {
// 		container: {
// 			center: true,
// 			padding: '2rem',
// 			screens: {
// 				'2xl': '1400px'
// 			}
// 		},
// 		extend: {
// 			colors: {
// 				border: 'hsl(var(--border))',
// 				input: 'hsl(var(--input))',
// 				ring: 'hsl(var(--ring))',
// 				background: 'hsl(var(--background))',
// 				foreground: 'hsl(var(--foreground))',
// 				primary: {
// 					DEFAULT: 'hsl(var(--primary))',
// 					foreground: 'hsl(var(--primary-foreground))',
// 					light: 'hsl(var(--primary-light))',
// 					dark: 'hsl(var(--primary-dark))'
// 				},
// 				secondary: {
// 					DEFAULT: 'hsl(var(--secondary))',
// 					foreground: 'hsl(var(--secondary-foreground))'
// 				},
// 				success: {
// 					DEFAULT: 'hsl(var(--success))',
// 					foreground: 'hsl(var(--success-foreground))',
// 					light: 'hsl(var(--success-light))'
// 				},
// 				warning: {
// 					DEFAULT: 'hsl(var(--warning))',
// 					foreground: 'hsl(var(--warning-foreground))',
// 					light: 'hsl(var(--warning-light))'
// 				},
// 				danger: {
// 					DEFAULT: 'hsl(var(--danger))',
// 					foreground: 'hsl(var(--danger-foreground))'
// 				},
// 				info: {
// 					DEFAULT: 'hsl(var(--info))',
// 					foreground: 'hsl(var(--info-foreground))',
// 					light: 'hsl(var(--info-light))'
// 				},
// 				destructive: {
// 					DEFAULT: 'hsl(var(--destructive))',
// 					foreground: 'hsl(var(--destructive-foreground))'
// 				},
// 				muted: {
// 					DEFAULT: 'hsl(var(--muted))',
// 					foreground: 'hsl(var(--muted-foreground))'
// 				},
// 				accent: {
// 					DEFAULT: 'hsl(var(--accent))',
// 					foreground: 'hsl(var(--accent-foreground))'
// 				},
// 				popover: {
// 					DEFAULT: 'hsl(var(--popover))',
// 					foreground: 'hsl(var(--popover-foreground))'
// 				},
// 				card: {
// 					DEFAULT: 'hsl(var(--card))',
// 					foreground: 'hsl(var(--card-foreground))'
// 				},
// 				sidebar: {
// 					DEFAULT: 'hsl(var(--sidebar-background))',
// 					foreground: 'hsl(var(--sidebar-foreground))',
// 					primary: 'hsl(var(--sidebar-primary))',
// 					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
// 					accent: 'hsl(var(--sidebar-accent))',
// 					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
// 					border: 'hsl(var(--sidebar-border))',
// 					ring: 'hsl(var(--sidebar-ring))'
// 				}
// 			},
// 			backgroundImage: {
// 				'gradient-primary': 'var(--gradient-primary)',
// 				'gradient-success': 'var(--gradient-success)',
// 				'gradient-warning': 'var(--gradient-warning)',
// 				'gradient-info': 'var(--gradient-info)',
// 				'gradient-surface': 'var(--gradient-surface)'
// 			},
// 			boxShadow: {
// 				'custom-sm': 'var(--shadow-sm)',
// 				'custom-md': 'var(--shadow-md)',
// 				'custom-lg': 'var(--shadow-lg)',
// 				'colored': 'var(--shadow-colored)'
// 			},
// 			transitionDuration: {
// 				'base': 'var(--transition-base)',
// 				'smooth': 'var(--transition-smooth)'
// 			},
// 			borderRadius: {
// 				lg: 'var(--radius)',
// 				md: 'calc(var(--radius) - 2px)',
// 				sm: 'calc(var(--radius) - 4px)'
// 			},
// 			keyframes: {
// 				'accordion-down': {
// 					from: {
// 						height: '0'
// 					},
// 					to: {
// 						height: 'var(--radix-accordion-content-height)'
// 					}
// 				},
// 				'accordion-up': {
// 					from: {
// 						height: 'var(--radix-accordion-content-height)'
// 					},
// 					to: {
// 						height: '0'
// 					}
// 				}
// 			},
// 			animation: {
// 				'accordion-down': 'accordion-down 0.2s ease-out',
// 				'accordion-up': 'accordion-up 0.2s ease-out'
// 			}
// 		}
// 	},
// 	plugins: [require("tailwindcss-animate")],
// } satisfies Config;


// import type { Config } from "tailwindcss";

// export default {
//   darkMode: ["class"],
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//           light: "hsl(var(--primary-light))",
//           dark: "hsl(var(--primary-dark))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         success: {
//           DEFAULT: "hsl(var(--success))",
//           foreground: "hsl(var(--success-foreground))",
//           light: "hsl(var(--success-light))",
//         },
//         warning: {
//           DEFAULT: "hsl(var(--warning))",
//           foreground: "hsl(var(--warning-foreground))",
//           light: "hsl(var(--warning-light))",
//         },
//         danger: {
//           DEFAULT: "hsl(var(--danger))",
//           foreground: "hsl(var(--danger-foreground))",
//         },
//         info: {
//           DEFAULT: "hsl(var(--info))",
//           foreground: "hsl(var(--info-foreground))",
//           light: "hsl(var(--info-light))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//         sidebar: {
//           DEFAULT: "hsl(var(--sidebar-background))",
//           foreground: "hsl(var(--sidebar-foreground))",
//           primary: "hsl(var(--sidebar-primary))",
//           "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
//           accent: "hsl(var(--sidebar-accent))",
//           "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
//           border: "hsl(var(--sidebar-border))",
//           ring: "hsl(var(--sidebar-ring))",
//         },
//       },
//       backgroundImage: {
//         "gradient-primary": "var(--gradient-primary)",
//         "gradient-success": "var(--gradient-success)",
//         "gradient-warning": "var(--gradient-warning)",
//         "gradient-info": "var(--gradient-info)",
//         "gradient-surface": "var(--gradient-surface)",
//       },
//       backgroundSize: {
//         200: "200% 200%",
//       },
//       boxShadow: {
//         "custom-sm": "var(--shadow-sm)",
//         "custom-md": "var(--shadow-md)",
//         "custom-lg": "var(--shadow-lg)",
//         colored: "var(--shadow-colored)",
//       },
//       transitionDuration: {
//         base: "var(--transition-base)",
//         smooth: "var(--transition-smooth)",
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//         gradientX: {
//           "0%, 100%": { backgroundPosition: "0% 50%" },
//           "50%": { backgroundPosition: "100% 50%" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         "gradient-x": "gradientX 10s ease infinite",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config;


import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          light: "hsl(var(--primary-light))",
          dark: "hsl(var(--primary-dark))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
          light: "hsl(var(--success-light))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
          light: "hsl(var(--warning-light))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          foreground: "hsl(var(--danger-foreground))",
        },
        info: {
          DEFAULT: "hsl(var(--info))",
          foreground: "hsl(var(--info-foreground))",
          light: "hsl(var(--info-light))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-success": "var(--gradient-success)",
        "gradient-warning": "var(--gradient-warning)",
        "gradient-info": "var(--gradient-info)",
        "gradient-surface": "var(--gradient-surface)",
      },
      backgroundSize: {
        200: "200% 200%",
      },
      boxShadow: {
        "custom-sm": "var(--shadow-sm)",
        "custom-md": "var(--shadow-md)",
        "custom-lg": "var(--shadow-lg)",
        colored: "var(--shadow-colored)",
      },
      transitionDuration: {
        base: "var(--transition-base)",
        smooth: "var(--transition-smooth)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-x": "gradientX 10s ease infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar-hide"),
  ],
} satisfies Config;
