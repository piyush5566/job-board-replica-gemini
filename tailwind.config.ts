
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))', // Main blue: #2563EB (Tailwind blue-600)
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		plugin(function({ addComponents }) {
			addComponents({
				'.breadcrumb': {
					display: 'flex',
					flexWrap: 'wrap',
					padding: '0.5rem 1rem',
					listStyle: 'none'
				},
				'.breadcrumb-item + .breadcrumb-item::before': {
					display: 'inline-block',
					padding: '0 0.5rem',
					color: '#e5e7eb',
					content: '"/"'
				},
				'.breadcrumb-item.active': {
					color: '#e5e7eb'
				},
				'.display-3': {
					fontSize: '2.5rem',
					fontWeight: '700',
					lineHeight: '1.2'
				},
				'.container-xxl': {
					width: '100%',
					paddingRight: '1rem',
					paddingLeft: '1rem',
					marginRight: 'auto',
					marginLeft: 'auto',
					'@screen xl': {
						maxWidth: '1320px'
					}
				},
				'.btn-primary': {
					backgroundColor: 'var(--secondary)',
					color: 'white',
					fontWeight: '600',
					'&:hover': {
						backgroundColor: '#1a8fe3'
					}
				},
				'.fs-5': {
					fontSize: '1.25rem'
				},
				'.fw-medium': {
					fontWeight: '500'
				},
				'.py-md-3': {
					paddingTop: '0.75rem',
					paddingBottom: '0.75rem',
					'@screen md': {
						paddingTop: '1rem',
						paddingBottom: '1rem'
					}
				},
				'.px-md-5': {
					paddingLeft: '1.25rem',
					paddingRight: '1.25rem',
					'@screen md': {
						paddingLeft: '3rem',
						paddingRight: '3rem'
					}
				},
				'.me-3': {
					marginRight: '0.75rem'
				}
			})
		})
	],
} satisfies Config;
