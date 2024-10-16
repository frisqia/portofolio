import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(-40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			fadeInTwo: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideRight: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			slideLeft: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(40px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			typing: {
  				'0%': {
  					width: '0ch'
  				},
  				'100%': {
  					width: '100%'
  				}
  			},
  			blink: {
  				'0%': {
  					borderRightColor: 'transparent'
  				},
  				'50%': {
  					borderRightColor: 'white'
  				},
  				'100%': {
  					borderRightColor: 'transparent'
  				}
  			},
  			wave: {
  				'0%, 20%, 50%, 80%, 100%': {
  					transform: 'rotate(0deg)'
  				},
  				'40%': {
  					transform: 'rotate(15deg)'
  				},
  				'60%': {
  					transform: 'rotate(-15deg)'
  				}
  			},
  			shake: {
  				'0%, 100%': {
  					transform: 'translateX(0)'
  				},
  				'25%': {
  					transform: 'translateX(-5px)'
  				},
  				'50%': {
  					transform: 'translateX(5px)'
  				},
  				'75%': {
  					transform: 'translateX(-5px)'
  				}
				
  			},
			  bounce: {
				'0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
				'40%': { transform: 'translateY(-30px)' },
				'60%': { transform: 'translateY(-15px)' },
			  },
			
  			pulseZoom: {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			fall: {
  				'0%': {
  					transform: 'translateY(-100px)',
  					opacity: '0'
  				},
  				'100%': {
  					transform: 'translateY(0)',
  					opacity: '1'
  				}
  			},
			  fadeOut: {
				'0%': { opacity: '1' },
				'100%': { opacity: '0' },
			  },
			  slideUp: {
				'0%': { transform: 'translateY(100%)' },
				'100%': { transform: 'translateY(0)' },
			  },
			  slideDown: {
				'0%': { transform: 'translateY(0)' },
				'100%': { transform: 'translateY(100%)' },
			  },
			  rotate: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' },
			  },
			  zoomIn: {
				'0%': { transform: 'scale(0.8)', opacity: '0' },
				'100%': { transform: 'scale(1)', opacity: '1' },
			  },
			  spin: {
				'0%': { transform: 'rotate(0deg)' },
				'100%': { transform: 'rotate(360deg)' }
			  },
			  flash: {
				'0%, 100%': { opacity: '1' },
				'50%': { opacity: '0' }
			  },
			  flip: {
				'0%': { transform: 'rotateY(0deg)' },
				'100%': { transform: 'rotateY(360deg)' }
			  },
			  zoomOut: {
				'0%': { transform: 'scale(1)', opacity: '1' },
				'100%': { transform: 'scale(0.5)', opacity: '0' }
			  },
			  heartbeat: {
				'0%, 100%': { transform: 'scale(1)' },
				'50%': { transform: 'scale(1.2)' }
			  }
  		},
  		animation: {
  			fadeIn: 'fadeIn 1s ease-in-out',
  			fadeInTwo: 'fadeInTwo 5s ease-in-out',
  			slideRight: 'slideRight 6s ease-in-out',
  			slideLeft: 'slideLeft 6s ease-in-out',
  			typing: 'typing 4s steps(120) forwards',
  			blink: 'blink 0.75s step-end infinite',
  			wave: 'wave 1s infinite',
  			shake: 'shake 0.5s ease-in-out',
  			pulseZoom: 'pulseZoom 1s ease-in-out infinite',
  			fall: 'fall 2s ease-in-out forwards',
			bounce: 'bounce 2s infinite',
			fadeOut: 'fadeOut 1s ease-out',
			slideUp: 'slideUp 0.6s ease forwards',
			slideDown: 'slideDown 0.6s ease forwards',
			rotate: 'rotate 2s linear infinite',
			zoomIn: 'zoomIn 0.5s ease forwards',
			spin: 'spin 1s linear infinite',
			flash: 'flash 2s infinite',
			flip: 'flip 1.5s ease-in-out infinite',
			zoomOut: 'zoomOut 1s ease-out forwards',
			heartbeat: 'heartbeat 1.5s ease-in-out infinite'
  		},
  		fontFamily: {
  			lilita: ['Lilita One', 'cursive'],
  			Qwitcher: ['Qwitcher Grypen', 'cursive']
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
