import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { AlertCircle, ChevronRight, Eye, EyeOffIcon, Loader2 } from 'lucide-react';

import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Button } from '../components/ui/button';

import { useAuthStore } from '../stores/auth.store';
import { adminPaths } from '../lib/data';
import { getErrorMessage } from '../lib/utils';

import logo from '/general/full-logo.png';
import adminAuthService from '../services/admin-auth.service';
import bgMesh from '/admin/login-bg-mesh.png';
import ellipse1 from '../assets/icons/admin/login-ellipse-1.svg';
import ellipse2 from '../assets/icons/admin/login-ellipse-2.svg';

const loginSchema = z.object({
  email: z.email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginValues = z.infer<typeof loginSchema>;

const AdminLoginPage: React.FC = () => {
  const [formError, setFormError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (values: LoginValues) => {
    setFormError(null);

    try {
      const { token, user } = await adminAuthService.login(values);
      setAuth(token, user);
      navigate(adminPaths.dashboard, { replace: true });
    } catch (error) {
      setFormError(getErrorMessage(error) || 'Invalid credentials');
    }
  };

  return (
    <div className="admin relative min-h-svh w-full overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img src={bgMesh} alt="" className="absolute bottom-0 right-0 h-210.25 w-367.75 max-w-none mix-blend-multiply object-cover" />

        <div className="absolute -left-12 top-105 size-139.5">
          <img src={ellipse1} alt="" className="absolute inset-[-17.92%] max-w-none" />
        </div>

        <div className="absolute -left-24.5 -top-161.75 flex h-285 w-413.5 items-center justify-center">
          <div className="rotate-[-21.27deg]">
            <div className="relative h-[627.7px] w-382.75">
              <img src={ellipse2} alt="" className="absolute inset-y-[-31.86%] inset-x-[-13.06%] max-w-none" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex min-h-svh items-center justify-center px-6 py-12">
        <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-120 flex-col gap-6 rounded-[24px] bg-primary-foreground p-10 shadow-[0px_1px_2px_rgba(0,0,0,0.04)]">
          <img src={logo} alt="Eunisell" className="h-8 w-auto self-start object-contain" />

          <div className="flex flex-col gap-1">
            <p className="text-lg font-medium leading-6.75 text-black">Welcome Back!</p>
            <p className="text-sm leading-5 text-muted-foreground">Sign in to manage the website content.</p>
          </div>

          <div className="flex flex-col gap-1">
            <Label htmlFor="email" className="text-sm font-medium text-black">
              Email
            </Label>

            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@eunisell.com"
              aria-invalid={!!errors.email}
              className="h-10 rounded-xl px-4 text-xs items-center flex text-black"
              {...register('email')}
            />

            {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Label htmlFor="password" className="text-sm font-medium text-black">
                Password
              </Label>

              <div className="relative text-xs">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  autoComplete="current-password"
                  placeholder="Password"
                  aria-invalid={!!errors.password}
                  className="h-10 rounded-xl pl-4 text-xs items-center flex text-black"
                  {...register('password')}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                >
                  {showPassword ? <Eye className="size-4" /> : <EyeOffIcon className="size-4" />}
                </button>
              </div>

              {errors.password && <p className="text-xs text-destructive">{errors.password.message}</p>}
            </div>
          </div>

          {formError && (
            <div className="flex items-start gap-2 rounded-md bg-destructive/10 px-3 py-2.5 text-sm text-destructive">
              <AlertCircle className="size-4 shrink-0 mt-0.5" />
              <span>{formError}</span>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-10 w-full rounded-xl bg-secondary pl-4 pr-3 text-primary-foreground hover:bg-accent/90 flex justify-center items-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Signing in…
              </>
            ) : (
              <>
                Sign In <ChevronRight />
              </>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
