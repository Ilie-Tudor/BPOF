import { useRouter } from 'next/router';
import { Box, Button } from '@chakra-ui/react';
import { useCallback, FC } from 'react';
import { ActionButton } from './ActionButton';
import { SocialMediaIcons } from './SocialMediaIcons';
import { LoginModalButton } from './core/LoginModalButton';

interface HeaderMenuButtonsProps {
  enabled: string[];
}

export const HeaderMenuButtons: FC<HeaderMenuButtonsProps> = ({ enabled }) => {
  const router = useRouter();

  const handleMintClick = useCallback(() => {
    router.push('/mint');
  }, [router]);

  const handleAboutClick = useCallback(() => {
    router.push('/about');
  }, [router]);

  return (
    <>
      {enabled.includes('mint') && (
        <ActionButton onClick={handleMintClick}>Mint</ActionButton>
      )}
      {enabled.includes('auth') && <LoginModalButton />}
    </>
  );
};
